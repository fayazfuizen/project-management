



var main=document.getElementById("main");
   showlist();




function showlist()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data)=>{data.map((x)=>{
        let maindiv=document.createElement('div');
        maindiv.className='majordiv'

        // let mindiv=document.createElement('div')
        // mindiv.className='minordiv'

        let imginfo=document.createElement('img')
        imginfo.src=`profile.png`;

        let newdiv=document.createElement('div');
        newdiv.className="textclass"

        let namep=document.createElement('p')
        namep.className="pname";
        let namedata=document.createTextNode(`${x.name}`);
        namep.appendChild(namedata);

        let email=document.createElement('p')
        email.className="email";
        let addemail=document.createTextNode(`   ${x.email}  `);
        email.appendChild(addemail);

        let add=document.createElement('p');
        add.className="address";
        let address=document.createTextNode(`${x.address.city}`);
        add.appendChild(address);

        maindiv.appendChild(imginfo);
       newdiv.appendChild(namedata);
       newdiv.appendChild(addemail);
       newdiv.appendChild(address);

        maindiv.appendChild(newdiv);
        main.appendChild(maindiv)

    })
    // document.body.appendChild(main);
})
}