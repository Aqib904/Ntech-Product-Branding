import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { GetArticles } from "../../store/action/articleAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { globalUrl } from "../../components/Url";
export default function Articles({ data, page }) {
  const dispatch = useDispatch();
  const [pagesNumber, setPagesNumber] = useState([]);
  const handleDecrementPage = () => {
    if (data?.PageNo > 1) {
      dispatch(GetArticles(data?.PageNo - 1));
    }
  };
  const handlePageClick = (page) => {
    if (data?.PageNo <= data?.TotalPages) {
      if (page != data?.PageNo) {
        dispatch(GetArticles(page));
      }
    }
  };
  const handleIncrementPage = () => {
    if (data?.PageNo < data?.TotalPages) {
      dispatch(GetArticles(data?.PageNo + 1));
    }
  };
  useEffect(() => {
    if (data && data.TotalPages) {
      const totalPages = data.TotalPages;
      const newPagesNumber = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
      setPagesNumber(newPagesNumber);
    }
  }, [data]);
  const router = useRouter();
  return (
    <div style={{ width: "100%" }}>
      <Row className="d-flex px-0 popular-article news_row_margin news-padding-container my-2">
        {data?.NewsArticles?.map((item) => (
          <Col
            lg="4"
            sm="6"
            className="news_article"
            key={item.id}
          >
            {/* <div className="mx-1"> */}
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: `${encodeURIComponent(
                    item?.Title.replace(/\s+/g, "-")
                  )}`,
                });
                // router.push({
                //   pathname: "/ArticleDetail",
                //   query: { data: item?.id },
                // });
              }}
            >
              <div className="image-container">
                <img
                  src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${item?.Image}`}
                  alt="universalTesla"
                  className="img-fluid aticle-image w-100 pros-style"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                className="popular-article__tag font-poppins"
                style={{
                  fontSize: "14px",
                  color: "#000",
                  // textOverflow: 'ellipsis',
                  // whiteSpace: 'nowrap',
                  // overflow: 'hidden',
                  lineHeight: "100%",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  marginTop: "16px",
                }}
              >
                {item?.Category}
              </p>
              <h6 className="card-header-text popular-article__header ShortService font-poppins">
                {item?.Title}
              </h6>
              <p
                className="ShortService font-poppins service-pro-desc"
             
              >
                {item?.ShortDescription}
              </p>
            </div>
          </Col>
        ))}
      </Row>
      {page == "news" ? (
        <>
          <Row className="d-flex my-2 px-0 popular-article ">
            <Col
              lg="12"
              className="d-flex align-items-center justify-content-center "
            >
              <div className="mx-2 cursor" onClick={handleDecrementPage}>
                <FaAngleLeft />
              </div>
              {pagesNumber?.map((page, index) => {
                return (
                  <div
                    key={index}
                    className={`mx-2 px-2 cursor rounded ${
                      page === data?.PageNo
                        ? "dark text-white"
                        : "bg-light text-dark"
                    }`}
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </div>
                );
              })}
              {/* <span
              className="rounded-circle bg-primary text-white p-2 d-flex align-items-center justify-content-center"
              style={{ height: "40px", width: "40px" }}
            >
              {data?.PageNo}
            </span> */}

              <div className="mx-2 cursor" onClick={handleIncrementPage}>
                <FaAngleRight />
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Link
                className="dark text-light rounded mt-3 py-3 px-3 text-decoration-none"
                target="_blank"
                href={"https://www.vehya.com/#/home"}
              >
                Vehya Marketplace
              </Link>
            </Col>
          </Row> */}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
