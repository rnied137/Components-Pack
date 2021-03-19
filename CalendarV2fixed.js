
.calendar-labels {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    color: lightgray;
    opacity: 0.9;
    border-bottom: 2px solid lightgray;    
    text-align: center;
    
}

.calendar-days {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    margin-top: 0.5em;

}


.month,
.year {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 1em;
}

.today {
    background-color:#4285F4; ;
    border-radius: 25px;
    text-align: center;
    color: white;
}


.gray {
    color: lightgray;
}



.calendar-current-month,
.calendar-other-month {
text-align: center;
}

.calendar-navigation {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
}


.calendar-navigation svg {
    margin-right: 10px;
    margin-top: 5px;
    
}
