import React, { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';

import { SlCallIn, SlCallOut } from 'react-icons/sl';
import { FiArchive } from 'react-icons/fi';
import "../css/AllCalls.css";

const AllCalls = () => {
  const { calls, setCalls, setArchivedCalls, archivedCalls } = useContext(GeneralContext);
  // console.log("single calls", calls);

  const onArchive = (call) => {
    setArchivedCalls([...archivedCalls, call]);
  };
  const removeFromCalls = (id) => {
    setCalls((pre) => pre.filter((item) => !(id === item.id)));
  };

  return (
    <div className='main-archived-calls'>
      {calls.map((call) => (
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
                <button onClick={() => { onArchive(call); removeFromCalls(call.id); }} className="archive-button"><FiArchive className='archive-icon' /></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCalls;