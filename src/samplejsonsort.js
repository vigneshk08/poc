import sortJson from 'sort-json';


const sortedata = () => {
    const data = [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]

    const options= { ignoreCase : true, reverse:true ,depth :1 };

   let values = sortJson({data},options);

   console.log(values);


    
    return <div>
      Hello
    </div>;
}


export default sortedata;