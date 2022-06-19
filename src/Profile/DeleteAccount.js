import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React,{useState,useEffect} from "react";
import {DeleteCandidateAccount} from "../config/api";

export default function DeleteAccount() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
  }, []);
  async function DeleteAccount(){  
    await DeleteCandidateAccount(sessionStorage.getItem("CandidateID")).then(response=>{
      alert("Account Deleted");
      setRedirect(true);
    }).catch((error) => 
    {
        alert(error);
    });
}
  if(redirect){
    window.location.href="/";
    localStorage.clear();
      //return <Redirect to={ "/auth/profile"}/>;
  }
  return (
    <>
      <div className="profileBoxDetails">
        <div className="profileBoxDetailInner">
          <div className="deleteBox">
            <div className="deleteBoxInner">
              <Icon path={mdiTrashCanOutline} />
              <h3>Your are about to delete a Account</h3>
              <p>This will delete your Account from database</p>
              <p>Are you sure?</p>
              <div className="deleteBoxActions">
                <button className="cancel">cancel</button>
                <button className="del" onClick={()=>DeleteAccount()}>delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
