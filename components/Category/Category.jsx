import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from "./category.module.scss";

const categoryDetail = [
  {
    id: 1,
    text: "Accounting/Finance (201)",
  },
  {
    id: 2,
    text: "Education/Training (201)",
  },
  {
    id: 3,
    text: "Health & Fitness (69)",
  },
  {
    id: 4,
    text: "Production/Opration (132)",
  },
  {
    id: 5,
    text: "Design/Creative (91)",
  },
  {
    id: 6,
    text: "Engineer/Architects (191)",
  },
  {
    id: 7,
    text: "Telecomunication (400)",
  },
  {
    id: 8,
    text: "Marketing/Sales (333)",
  },
  {
    id: 9,
    text: "Data Entry/Opeator (8)",
  },
  {
    id: 10,
    text: "Research/Consultancy (34)",
  },
  {
    id: 11,
    text: "Security/Support service (56)",
  },
  {
    id: 12,
    text: "Research/Marketing (44)",
  },
];

const Category = () => {
  return (
    <div className={style.category}>
      <SectionHeader
        title="Popular Category"
        text="Many desktop publishing packages and web page editors"
      />

      <div className={style.category_main}>
        {categoryDetail.map((details) => {
          return (
            <div key={details.id} className={style.category_div}>
              <p>{details.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
