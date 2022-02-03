import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../assets/style/book_view_modal.sass";
import _ from "lodash";
import { clearBookQuickView } from "../redux/actions";
import SubmitBtn from "./SubmitBtn";

export default connect((state) => state, { clearBookQuickView })(
  function BookViewModal({ book_quick_view, clearBookQuickView }) {
    const [show, setshow] = useState(false);

    useEffect(() => {
      if (!_.isEmpty(book_quick_view)) {
        setshow(true);
      }
    }, [book_quick_view]);

    return (
      <div className={`book-view-modal d-none ${show ? "d-md-flex" : ""}`}>
        <div className="view-contanier">
          <div className="container p-0 h-100">
            <div className="row align-items-center h-100">
              <button
                className="close-modal p-3"
                onClick={() => {
                  setshow(false);
                  clearBookQuickView();
                }}
              >
                <i className="fal fa-times"></i>
              </button>
              <div className="col-6 pe-0 h-100">
                <div className="book-cover-area">
                  <img src={book_quick_view?.cover} alt="book-cover" />
                </div>
              </div>
              <div className="col-6 ps-0 h-100">
                <div className="book-info-area">
                  <h3 className="book-title">{book_quick_view?.title}</h3>
                  <p className="m-0 book-author">
                    Author: <span>{book_quick_view?.author}</span>
                  </p>
                  <p className="m-0 book-price">
                    ${book_quick_view?.price?.toFixed(2)}
                  </p>
                  <hr />
                  <p className="description-title">description:</p>
                  <p className="book-description">
                    {book_quick_view?.short_description}
                  </p>
                  <hr />
                  <p className="quantitiy-instock">
                    {book_quick_view?.quantity} in stock
                  </p>
                  <SubmitBtn value={"ADD TO CART"} />
                  <hr />
                  <SubmitBtn value={"BUY NOW"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
