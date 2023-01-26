import React, { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { SlCallIn, SlCallOut } from 'react-icons/sl';
import { FiArchive } from 'react-icons/fi';
import "react-toastify/dist/ReactToastify.css";
import "../css/AllCalls.css";


const AllCalls = () => {
  const { calls, setCalls } = useContext(GeneralContext);
  // console.log("single calls", calls);

  const handleArchiveCall = (id) => {
    axios.patch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, { is_archived: true })
      .then((res) => {
        const updatedCalls = calls.map(call => {
          if (call.id === id) {
            call.is_archived = true;
          }
          return call;
        });
        toast("Call Archived Successfully!");
        setCalls(updatedCalls);
        // console.log("updatecalls", updatedCalls);
        // console.log('archive thing', res);
      });
  };

  return (
    <div className='main-archived-calls'>
      {calls.map((call) => (
        call.is_archived === false
          ?
          <div key={call.id}>
            <div className='date'>{new Date(call.created_at).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div className='main-allcalls'>
              <div className='call-info'>
                <div className='icon-details'>
                  <div>
                    <div style={{ marginRight: "1em" }}>{call.direction === "inbound" ? <SlCallIn style={{ color: "green", fontSize: "17px" }} /> : <SlCallOut style={{ color: "red", fontSize: "17px" }} />}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{call.from}</div>
                    <div style={{ color: "grey" }}>{call.direction === "inbound" ? `Incoming call from ${call.from}` : `Outgoing call to ${call.to}`}</div>
                  </div>
                </div>
                <div className='time-archive'>
                  <div style={{ color: "grey" }}>{new Date(call.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                  <div className='border-dot-inarchive'>
                    <div className='border-inarchive' />
                    <div className='border-inarchive' />
                    <div className='border-inarchive' />
                  </div>
                  <button onClick={() => { handleArchiveCall(call.id); }} className="archive-button"><FiArchive className='archive-icon' /></button>
                  <ToastContainer autoClose={2000} />
                </div>
              </div>
            </div>
          </div>
          :
          ""
      ))}
    </div>
  );
};

export default AllCalls;