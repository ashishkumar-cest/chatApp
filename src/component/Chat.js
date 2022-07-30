import React, { useEffect, useState } from 'react'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

export default function Chat() {
    // Create a new post reference with an auto-generated id
    const [name, setName] = useState();
    const [chat, setChat] = useState([]);
    const [msg, setMsg] = useState();
    const db = getDatabase();
    const postChatRef = ref(db, 'chats');

    let user;
    const handleChange = (e) => {
        user = e.target.value;

    }
    const start = () => {
        setName(user);
    }
    const updateHeight = ()=>{
        const el = document.getElementById('chat');
    if(el){
      el.scrollTop = el.scrollHeight;
    }
        
    }
    
    const sendMsg = () => {
        const chatRef = push(postChatRef);
        set(chatRef, {
            name, msg: msg
        });
        }
        useEffect(() => {
            onChildAdded(postChatRef, (data) => {
                setChat(chat => [...chat, data.val()]);
                updateHeight();
                })
                
        }, [])
        console.log(chat);
    return (
        <div>
            <h1>start chat </h1>
            {name ?

                <div className='chatContainer'>
                <div className='chatCon' id='chat'>
                    <h2>user' {name}</h2>
                    {
                        chat.map((c, i) =>
                            <div key={i} className={c.name === name ? 'container' : 'me'}>
                                <p className='chatBox'>
                                    <strong>{c.name} :</strong><br></br>
                                    <span>{c.msg}</span>
                                </p>
                            </div>
                        )
                    }
                    </div>
                    <div className='buttom'>
                        <input type="text" placeholder='start chat' onChange={(e) => setMsg(e.target.value)} />
                        <button onClick={sendMsg}>send</button>
                    </div>
                </div> :
                <div>
                    <h2>test user</h2>
                    <input type="text" value={msg} onChange={handleChange} />
                    <button onClick={start}>start</button>
                </div>}
        </div>
    )
}
