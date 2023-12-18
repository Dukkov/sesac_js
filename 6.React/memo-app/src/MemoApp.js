import { useState } from "react";

const MemoApp = () => {
    const [memoList, setMemoList] = useState([]);
    const [newMemo, setNewMemo] = useState('');

    const addMemo = () => {
        setMemoList([...memoList, newMemo]);
        setNewMemo('');
    }

    const deleteMemo = (index) => {
        const updatedMemoList = [...memoList];
        updatedMemoList.splice(index, 1);
        setMemoList(updatedMemoList);
    }

    return (
        <div>
            <h1>메모</h1>
            <div>
                <input type="text" value={newMemo} onChange={(e) => setNewMemo(e.target.value)}
                placeholder="메모를 입력하세요" />
                <button onClick={addMemo}>추가</button>
            </div>

            <ul>
                {memoList.map((memo, index) => (
                    <li key={index}>
                        {memo}
                        <button onClick={deleteMemo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MemoApp;