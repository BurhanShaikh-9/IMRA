import React, { useState } from 'react'
import { FiTrash } from 'react-icons/fi';

export const Faqs = () => {
  const [addFaq, setAddFaq] = useState([]);
  function handleAddMoreClick(e) {
    e.preventDefault();
    if (addFaq.length <= 8) {
      setAddFaq([...addFaq, ""]);
    }
    else {
      setAddFaq(addFaq);
    }

  }
  const handleServiceDelete = (e) => {
    e.preventDefault();
    console.log("clicked")
    const list = [...addFaq]
    list.splice(e, 1);
    setAddFaq(list)
  }

  return (
    <section className='mainSection'>
      <div className="container">
        <div className="mainSectionWrapper">
          <div className="heading">
            <p>
              FAQS
            </p>
          </div>
          <div className="card cardForm">
            <div className="card-body">
              <div className="accordion" id="accordionExample">
                {[1, 2, 3, 4, 5].map((item, keyId) => (
                  <div className="accordion-item" key={keyId}>
                    <h2 className="accordion-header" id={`heading${keyId}`}>
                      <button className='accordionAbsoulteButton'>
                        <FiTrash />
                      </button>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${keyId}`} aria-expanded="true" aria-controls={`collapse${keyId}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </button>
                    </h2>
                    <div id={`collapse${keyId}`} className="accordion-collapse collapse " aria-labelledby={`heading${keyId}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto esse officia perferendis, autem odit?
                      </div>
                    </div>
                  </div>
                ))}

                {addFaq.map((item, keyid) => (
                  <div key={keyid} >
                    <div className="newSectionOutter">
                      <div className="newSectionContent">
                        <p>Add Question</p>
                        <input type="text" />
                      </div>
                      <div className="newSectionContent">
                        <p>Add Answer</p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                )
                )}

                <div className="addSectionButton">
                  {/* {
                    addFaq.length >= 1 &&
                    <button onCanPlay={handleServiceDelete}>Delete</button>
                  } */}
                  <button onClick={handleAddMoreClick}>Add Section</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
