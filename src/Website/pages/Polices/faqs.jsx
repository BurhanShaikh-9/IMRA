import React, { useState } from 'react'

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
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto esse officia perferendis, autem odit?
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nemo quidem tempora, maiores suscipit mollitia, animi impedit natus eveniet commodi quo eos saepe excepturi autem fugit dolor unde beatae. Consequuntur!
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat rem voluptatem hic impedit inventore commodi molestiae accusamus error alias optio possimus nisi debitis itaque suscipit libero, atque cumque delectus rerum vitae doloribus! Quidem facere voluptates error perspiciatis eius incidunt.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni provident laboriosam sapiente rerum omnis iure quae quo! Libero, provident asperiores.

                    </div>
                  </div>
                </div>
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
