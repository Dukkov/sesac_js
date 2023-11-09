// month를 받아서 해당 월의 일수를 반환하는 함수
export function dateOfMonth(month) {
    switch (parseInt(month)) {
        case 1:
            return (31);
        case 2:
            return (28);
        case 3:
            return (31);   
        case 4:
            return (30);
        case 5:
            return (31);
        case 6:
            return (30); 
        case 7:
            return (31);
        case 8:
            return (31);
        case 9:
            return (30);    
        case 10:
            return (31);
        case 11:
            return (30);
        case 12:
            return (31);                
    }
}