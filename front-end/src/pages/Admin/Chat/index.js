import React, { useState, useEffect, useRef } from "react";
function Chat() {
    const users = [
        { id: 1, name: "Nguyễn Khấc Đạt", avatar: 'https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/479675881_1430404127937109_1011207244040765089_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGiApKbCSIVQzQQRTuy7Xf9x_AtavXkQJHH8C1q9eRAkacjDb8DJ90KdmQJiiVN8UmUS7_aPdl8YdWEdWbXBzVm&_nc_ohc=_oHQL_6yFtkQ7kNvgHM529W&_nc_oc=AdlujPgFBGIwdRmQVVthPHys2fv7XCLvT-Pt5NQl9fEFPUb22DNIfWfAzclMLwqOJ5owA0A2gZPxuhmE8QcQlEKb&_nc_zt=23&_nc_ht=scontent.fhph2-1.fna&_nc_gid=QLo329KE5kd05I_OqiEyWg&oh=00_AYFV1rJvMS0pfNNHlQyg76YjEv5mqYtQ3y4_3VinEsb5IA&oe=67F1F789' },
        { id: 2, name: "Cẩm Ly", avatar: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/447608515_1723749028157818_7070642967171899223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH2TvR7uBDG_iTWBVUg9p99us8z7VbL7Be6zzPtVsvsFzf1m4BuhLdHJNbagNgoMFim84c9c39fcElNtaVJs6Zg&_nc_ohc=_UHU_ALG79kQ7kNvgEgP_U5&_nc_oc=AdmyH8VpuiXHqHGMYcn0FKM7sNfBBssk4WoGOryZHgab1wtzODwhtfmqHlI1ch8p7V2tZ-CkdUvXM2EdrGOLglmz&_nc_zt=23&_nc_ht=scontent.fhph1-2.fna&_nc_gid=Zf6MS5ugpScY6nkyvXLOFw&oh=00_AYESRc4ALXibGmVPnGP81Pr1bmB569Ci_JM35hry8aj0yA&oe=67F1C266' },
        { id: 3, name: "Hoàng Uy", avatar: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/484071126_1658257151746230_8302429432392862696_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFuXWvzCIiGf3W9eZ-WZ_hT6kDT7lKK3e_qQNPuUord7wtlv1KbyTcEpGKXWFmHw7Ryztb-6epM-W8t8TJG7mpW&_nc_ohc=m53NRQLbmCwQ7kNvgFn4lUb&_nc_oc=AdnVL3SDN-ut4CWGFpvouDub8Twh1sneqycJg5FvNH89uN1-n2vIPyL7rduOqPxzwtbKeRH6AZfrV0RJ71Licm3u&_nc_zt=23&_nc_ht=scontent.fhph1-2.fna&_nc_gid=TNV30TgzJitAgkitAciyXg&oh=00_AYF9jtQSMeMXh7e8UrCNYb4FHkMzBsd6zurzUPho-7JP6w&oe=67F1DFE9' }
    ];
    const messagesData = {
        1: [{ text: "Xin chào! 😊", sender: "user" }, { text: "Chào bạn!", sender: "bot" }],
        2: [{ text: "Hôm nay thế nào?", sender: "user" }],
        3: [{ text: "Lâu quá không gặp!", sender: "bot" }]
    };
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const selectUser = (userId) => {
        setSelectedUser(userId);
        setMessages(messagesData[userId] || []);
    };

    const sendMessage = () => {
        if (input.trim() !== "" && selectedUser) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");

            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, { text: "OK bạn nhé!", sender: "other" }]);
            }, 1000);
        }
    };
    return (
        <div className="container chat-container">
            <div className="row chat-box w-100">
                {/* Danh sách bạn bè */}
                <div className="col-3 user-list">
                    <div style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                        <div className='search' style={{ marginLeft: '12px' }}>
                            <input type="text" placeholder="Search" style={{ outline: 'none', border: 'none', position: 'relative', background: '#c4daf3' }}></input>
                            <span style={{ color: '#62677399', position: 'absolute', left: '520px' }}><i class="fas fa-search"></i></span>
                        </div>
                    </div>
                    <ul className="list-group mt-4 ">
                        {users.map((user) => (
                            <li key={user.id} className={`list-group-item ${selectedUser === user.id ? "active" : ""}`} onClick={() => selectUser(user.id)}>
                                <img src={user.avatar} alt="avatar" className="avatar" />
                                <span className="user-name">{user.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Khung chat */}
                <div className="col-9 chat-section">
                    <div className="chat-header">
                        <img src={selectedUser ? users.find((u) => u.id === selectedUser)?.avatar : "Chọn người để chat"} alt="avatar" className="avatar" />
                        {selectedUser ? users.find((u) => u.id === selectedUser)?.name : "Chọn người để chat"}
                    </div>
                    <div className="chat-body" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    {selectedUser && (
                        <div className="chat-footer">
                            <input type="text" className="form-control" placeholder="Nhập tin nhắn..." value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-primary" onClick={sendMessage}>Gửi</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chat