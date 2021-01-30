import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./Autocomplete.css";

export const Autocomplete = () => {
  const [usernames, setUsernames] = useState([

  ]);

  const [isError, setError] = useState(false);

  const [currentListItemIndex, setCurrentListItemIndex] = useState(0);

  const [hiddenList, setHiddenList] = useState(true);
  const [foundItems, setFoundItems] = useState([]);
  const mainInputRef = useRef(null);
  const selectedListItemsRef = useRef(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    if (
      selectedListItemsRef && //selectedItemsRef?.current.?children?[0]
      selectedListItemsRef.current &&
      selectedListItemsRef.current.children &&
      selectedListItemsRef.current.children[0]
    )
      selectedListItemsRef.current.children[
        currentListItemIndex
      ].style.setProperty("background-color", "#e9e9e9");

  }, [currentListItemIndex]);


  useEffect(()=> {

    axios.get(url).then((res)=> {
      const data = res.data;
      const usernamesData = data.map((username)=> 
        username.username
      )
      setUsernames(usernamesData);
      setError(false)
    })
  }, [])

  const handleChange = (e) => {
    if (e.target.value.length < 1) {
      setFoundItems([]);
      return;
    }
    const items = usernames.filter((user) => user.includes(e.target.value));
    if (items.length === 0) {
      setFoundItems([]);
      setHiddenList(true);
    }
    setFoundItems([...items]);
    setHiddenList(false);
  };


////////////////////////
  const selectValue = (e) => {
    mainInputRef.current.value = e.currentTarget.textContent.trim();
    setHiddenList(true);
    setFoundItems([]);
  };

  const handleBlur = (e) => {
    setTimeout(()=>setFoundItems([]),100)
  };

  function handleKeyDown(e) {
    setHiddenList(false);

    if (selectedListItemsRef.current && selectedListItemsRef.current.children)
      for (let i = 0; i < selectedListItemsRef.current.children.length; i++) {
        selectedListItemsRef.current.children[i].style.setProperty(
          "background-color",
          "white"
        );
      }

    if (foundItems.length === 0) {
      return;
    }


    if (e.keyCode === 40) {
      //DOWN
      setCurrentListItemIndex(
        (currentListItemIndex) => currentListItemIndex + 1
      );
      if (currentListItemIndex >= foundItems.length - 1) {
        setCurrentListItemIndex(foundItems.length - 1);
      }
    } else if (e.keyCode === 38) {
      //UP
      setCurrentListItemIndex(
        (currentListItemIndex) => currentListItemIndex - 1
      );

      if (currentListItemIndex <= 0) setCurrentListItemIndex(0);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      mainInputRef.current.value = selectedListItemsRef.current.children[
        currentListItemIndex
      ].textContent.trim();
      mainInputRef.current.blur();
      //setHiddenList(true);

    }
  }

  return (
    <>
      <div className="App">
         {isError ? (
        <div>Problem with loading data</div>
      ) : (
        usernames.map((user,index) => {
          return <div key={index}>{user}</div>;
        })
      )} 
        <div className="autocomplete-component-area">
          <h2>Autocomplete Component</h2>
          <form autoComplete="off">
            <div className="autocomplete" styles="width:300px;">
              <div className="autocomplete-items" ref={selectedListItemsRef}>
                {!hiddenList && foundItems.length !== 0
                  ? foundItems.map((listItem, index) => (
                      <div key={index} onClick={(e) => selectValue(e)}>
                        {listItem}
                      </div>
                    ))
                  : null}
              </div>
              <input
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                id="myInput"
                type="text"
                name="mainInput"
                placeholder="value"
                ref={mainInputRef}
                onFocus={(e) => handleChange(e)}
                onBlur={(e)=> handleBlur(e)}
              />
            </div>
            <input type="submit" />
          </form>
        </div>

        <p>CurrentListItemIndex: {currentListItemIndex}</p>
        <p>
          Current ListItemsLenght:
          {selectedListItemsRef &&
            selectedListItemsRef.current &&
            selectedListItemsRef.current.children &&
            selectedListItemsRef.current.children.length}
        </p>
      </div>
    </>
  );
};
