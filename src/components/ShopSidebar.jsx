import React, { useEffect, useState } from "react";
import ShopFilterItem from "./ShopFilterItem";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";
import { filterByPrice, filterByYear, filterByRate } from "../redux/actions";
import _debounce from "debounce";
import { Rating } from "@mui/material";
import scrollToTop from "../helpers/scrollToTop";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {
  filterByPrice,
  filterByYear,
  filterByRate,
})(function ShopSidebar({
  categories,
  books,
  filterByPrice,
  filterByYear,
  filterByRate,
  booksLength,
}) {
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0.1);
  const [value, setValue] = useState({ min, max });
  const [publication_years, setPublication_years] = useState([]);
  const [years, setyears] = useState([]);
  const [rates, setrates] = useState([]);

  useEffect(() => {
    if (books?.length) {
      // GET MIN AND MAX PRICES
      let prices = [];
      books.map((book) => {
        prices.push(book.price);
      });
      setmin(Math.min(...prices));
      setmax(Math.max(...prices));
      setValue({ min: Math.min(...prices), max: Math.max(...prices) });

      // GET YEARS
      let allYears = [];
      books.map((book) => {
        allYears.push(book.publication_date.slice(0, 4));
      });
      setPublication_years([...new Set(allYears.sort().reverse())]);
    }
  }, [books]);

  useEffect(() => {
    filterByYear(books, years);
    // scrollToTop();
  }, [years]);
  useEffect(() => {
    filterByRate(books, rates);
    // scrollToTop();
  }, [rates]);

  return (
    <div id="shop-sidebar">
      <ShopFilterItem label={"categories"}>
        <Accordion id="categories-accordion">
          {categories?.length
            ? categories?.map((cat) => {
                return (
                  <AccordionItem
                    key={cat._id}
                    parent="categories-accordion"
                    id={cat.slug}
                    label={cat.title}
                  >
                    <ul className="sub-categories-list">
                      {cat?.sub_categories?.map((sub) => {
                        return (
                          <li key={sub._id} className="sub-category-item">
                            <Link
                              to={`/shop/category/${cat.slug}/${sub.slug}`}
                              className="sub-category-item"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionItem>
                );
              })
            : null}
        </Accordion>
      </ShopFilterItem>
      {/* ////////////////////////////////////////////////////// */}
      {booksLength > 1 ? (
        <ShopFilterItem label={"price"}>
          <InputRange
            maxValue={max}
            minValue={min}
            value={value}
            onChange={(value) => {
              setValue(value);
              filterByPrice(books, value);
            }}
          />
          <span className="price-range">
            Range : {`$${value.min} - $${value.max}`}
          </span>
        </ShopFilterItem>
      ) : null}
      {/* ////////////////////////////////////////////////////// */}
      {
        <ShopFilterItem label={"years"}>
          <div className="py-2">
            {publication_years.map((year) => {
              return (
                <div key={year} className="year-item">
                  <input
                    className="mebook-select-input"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setyears([...years, year]);
                      } else {
                        setyears([
                          ...years.filter((y) => {
                            return y !== year;
                          }),
                        ]);
                      }
                    }}
                  />
                  <span>{year}</span>
                </div>
              );
            })}
          </div>
        </ShopFilterItem>
      }
      {/* ////////////////////////////////////////////////////// */}
      <ShopFilterItem label={"ratings"}>
        <div className="py-2">
          {[5, 4, 3, 2, 1].map((rate) => {
            return (
              <div key={rate} className="rate-item">
                <input
                  className="mebook-select-input"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setrates([...rates, rate]);
                    } else {
                      setrates([
                        ...rates.filter((r) => {
                          return r !== rate;
                        }),
                      ]);
                    }
                  }}
                />
                <Rating
                  name="size-small"
                  readOnly
                  defaultValue={rate}
                  size="small"
                />
              </div>
            );
          })}
        </div>
      </ShopFilterItem>
    </div>
  );
});
