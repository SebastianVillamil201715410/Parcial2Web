import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

function Spaces () {
    const [spaces,setSpaces] = useState([]);
    const [selected,setSelected] = useState({});
    const  urlSpaces = 
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

    const [rooms,setRooms] = useState([]);
    const urlRooms =
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

    useEffect(()=>{
        if (navigator.onLine) {
            fetch(urlSpaces)
            .then(res=>res.json())
            .then(res=>{
                setSpaces(res);
                localStorage.setItem("spaces",JSON.stringify(res));
            });
        } else if (localStorage.getItem("spaces")!==null) {
            setSpaces(JSON.parse(localStorage.getItem("spaces")));
        }
    },[urlSpaces])

    useEffect(()=>{
        if (navigator.onLine) {
            fetch(urlRooms)
            .then(res=>res.json())
            .then(res=>{
                setRooms(res);
                localStorage.setItem("rooms",JSON.stringify(res));
            });
        } else if (localStorage.getItem("rooms")!==null) {
            setRooms(JSON.parse(localStorage.getItem("rooms")));
        }
    },[urlRooms])

    return (
        <>
            <main className="container">
                <div class="row">
                    <h1><FormattedMessage id="My Spaces"/></h1>
                </div>
                <div className="row d-flex">
                {spaces.map((item)=>(
                        <div className="col">
                            <div className="card">
                                    <div className="card-body" key={item.id} onClick={()=>setSelected(item)}>
                                        <img src='https://png.pngtree.com/element_pic/00/16/07/08577f369b99bed.jpg' className="card-img-top" alt="..."/>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.address}</p>
                                        <p className="card-text">{item.phone}</p>
                                        <p className="card-text">{item.type}</p>
                                    </div>
                            </div>
                        </div>
                ))}
                </div>
                <div class="row">
                    <h1><FormattedMessage id="My Rooms"/></h1>
                </div>
                <div>
                {rooms.map((room)=> 
                    Object.keys(selected).length !== 0 &&
                        <div className="row">
                            <div className="col-6">
                                <div class="col-2">
                                    <div className="card">
                                        <img src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-yellow-sofa-furniture-sofa-home-improvement-sofa-yellow-backrest-png-image_415071.jpg" className="card-img-top" alt="..." referrerpolicy="no-referrer"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{room.name}</h5>
                                            <p className="card-text">{room.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col"><FormattedMessage id="ID"/></th>
                                        <th scope="col"><FormattedMessage id="Device"/></th>
                                        <th scope="col"><FormattedMessage id="Value"/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>{room.id}</th>
                                            <td>{room.id}</td>
                                            <td>{room.devices.name}</td>
                                            <td>{room.devices.desired}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                           
                        </div>
                    
                )}
                </div>
            </main>
        </>
    );
}

export default Spaces;