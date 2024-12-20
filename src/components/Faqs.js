import React from "react";
import FaqSingle from "./single_components/FaqSingle";

const Faqs = () => {
  let row1 = [
    {
      id: 1,
      title: "Question No 1",
      description: "Answer",
    },
    {
      id: 2,
      title: "Question No 2",
      description: "Answer",
    }
    ,
    {
      id: 3,
      title: "Question No 3",
      description: "Answer",
    }
  ];

  let row2 = [
    {
      id: 5,
      title: "Question No 4",
      description: "Description",
    },
    {
      id: 6,
      title: "Question No 5",
      description: "Description",
    },
    {
      id: 7,
      title: "Question No 6",
      description: "Description"
    },
  ];
  return (
    <>
      <div className="tab-pane fade" id="tab2-3">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6" id="row-1">
                <div id="accordion-1" className="accordion-wrapper">
                  {row1.map((items) => {
                    return (
                      <FaqSingle
                      key={items.id}
                        title={items.title}
                        description={items.description}
                        index={items.id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-6" id="row-2">
                <div id="accordion-2" className="accordion-wrapper">
                  {row2.map((items) => {
                    return (
                      <FaqSingle
                      key={items.id}
                        title={items.title}
                        description={items.description}
                        index={items.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
