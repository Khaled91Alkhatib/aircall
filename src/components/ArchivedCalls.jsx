import React, { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';

import { SlCallIn, SlCallOut } from 'react-icons/sl';
import { TbArchiveOff } from 'react-icons/tb';
import "../css/AllCalls.css";


const ArchivedCalls = () => {
  const { calls, setCalls, archivedCalls, setArchivedCalls } = useContext(GeneralContext);
  // console.log('halla2', archivedCalls);

  const onAddToCalls = (archivedCall) => {
    setCalls([...calls, archivedCall]);
  };

  const onRemoveClick = (id) => {
    setArchivedCalls((pre) => pre.filter((item) => !(id === item.id)));
  };

  return (
    <div style={{ marginTop: "55px" }}>
      {archivedCalls.length === 0 ?
        <div>No Archived Calls</div>
        :
        <div style={{ marginTop: "55px", marginBottom: "45px" }}>
          {archivedCalls.map((archivedCall) => (
            <div key={archivedCall.id}>
              <div className='date'>{new Date(archivedCall.created_at).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              <div className='main-allcalls'>
                <div className='call-info'>
                  <div className='icon-details'>
                    <div>
                      <div style={{ marginRight: "1em" }}>{archivedCall.direction === "inbound" ? <SlCallIn style={{ color: "green", fontSize: "17px" }} /> : <SlCallOut style={{ color: "red", fontSize: "17px" }} />}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold" }}>{archivedCall.from}</div>
                      <div style={{ color: "grey" }}>{archivedCall.direction === "inbound" ? `Incoming call from ${archivedCall.from}` : `Outgoing call to ${archivedCall.to}`}</div>
                    </div>
                  </div>
                  <div className='time-archive'>
                    <div style={{ color: "grey" }}>{new Date(archivedCall.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                    <div className='border-dot-inarchive'>
                      <div className='border-inarchive' />
                      <div className='border-inarchive' />
                      <div className='border-inarchive' />
                    </div>
                    <button onClick={() => { onAddToCalls(archivedCall); onRemoveClick(archivedCall.id); }} className="archive-button"><TbArchiveOff className='archive-icon' /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>

  );
};

export default ArchivedCalls;