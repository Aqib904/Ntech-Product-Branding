import Link from "next/link";
import {
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
} from "reactstrap"; // Replace with your library

import { FaSistrix } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../store/action/articleAction";

export default function Navigation() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { pathname } = router;
	const { allArticles } = useSelector((state) => state.article);
	const { languageName } = useSelector((state) => state.language);
	const [language, setLanguage] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [selectedTitle, setSelectedTitle] = useState("");
	const [filturedArticles, setFilturedArticles] = useState([]);
	const dataArray = ["Service Pros", "Charging"];
	console.log(filturedArticles, "fil");
	const handleInputChange = (event) => {
		const inputText = event.target.value;
		setSearchText(inputText);

		if (inputText !== "") {
			const filteredTitles = allArticles
				.filter((article) =>
					article.Title.toLowerCase().startsWith(inputText.toLowerCase())
				)
				.map((article) => {
					return { title: article.Title, id: article.id };
				});

			setFilturedArticles(filteredTitles);
			setShowDropdown(true);
		} else {
			setFilturedArticles([]);
			setShowDropdown(false);
		}
	};

	const handleDropdownToggle = () => {
		setShowDropdown(!showDropdown);
	};
	const handleItemClick = (item) => {
		setSelectedTitle(item);
		setShowDropdown(false); // Close dropdown after selecting an item, if needed
	};
	useEffect(() => {
		dispatch(getAllArticles());
	}, []);
	useEffect(() => {
		setLanguage(languageName);
	}, [languageName]);

	return (
		// <Container fluid className="nav-container">
		//   <Container>
		//     {/* <Navbar variant="light" expand="md">
		//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
		//     <Navbar.Collapse id="basic-navbar-nav">
		//       <Nav className="ml-auto mt-2  nav-items">
		//         <Nav.Link>
		//           <Link href="/News">
		//             <a className="nav-link" role="button">
		//               News
		//             </a>
		//           </Link>
		//         </Nav.Link>

		//         <Nav.Link>
		//           <Link href="/ServicePros">
		//             <a className="nav-link" role="button">
		//               Service PROs
		//             </a>
		//           </Link>
		//         </Nav.Link>
		//         <Nav.Link>
		//           <Link href="/WorkForce">
		//             <a className="nav-link" role="button">
		//               Workforce
		//             </a>
		//           </Link>
		//         </Nav.Link>
		//       </Nav>
		//     </Navbar.Collapse>
		//   </Navbar> */}
		//     <Row className="py-3 ">
		//       <Col lg={5} className="mt-1">
		//         <Input placeholder="Search" className="w-100" />
		//       </Col>
		//       <Col lg={4} className="mt-1">
		//         <div className="py-2 header">
		//           <a className="linked pt-3 px-3 " href="/News">
		//             News
		//           </a>

		//           <a className="linked pt-3 px-3" href="/ServicePros">
		//             Service PROS
		//           </a>

		//           <a className=" linked pt-3 px-3" href="/WorkForce">
		//             WorkForce
		//           </a>
		//         </div>
		//       </Col>
		//     </Row>
		//   </Container>
		// </Container>
		<>
			<div className="d-flex justify-content-center align-items-start">
				<div class="B_header row my-2" style={{ width: '87%' }}>
					{/* <div class="col-lg-4 col-md-3  col-sm-12 col-xs-12 search">
						<div class="input-group mb-3 position-relative">
							<span class="Search_icon" id="basic-addon1">
								<FaSistrix />
							</span>
							<input
								type="text"
								className="form-control search"
								placeholder="Search"
								aria-label="Username"
								aria-describedby="basic-addon1"
								value={searchText}
								onChange={handleInputChange}
								style={{ zIndex: 1 }}
							/>
							<div style={{ position: "absolute", left: "40px", top: "0px" }}>
								<Dropdown isOpen={showDropdown} toggle={handleDropdownToggle}>
									<DropdownToggle
										style={{ zIndex: -1 }}
										className="nav-bg border-0"
									></DropdownToggle>
									<DropdownMenu className="shadow-sm">
										{filturedArticles.length > 0 ? (
											filturedArticles.map((item, index) => (
												<DropdownItem
													key={index}
													className="dropdown-item-style"
													onClick={() => {
														router.push({
															pathname: `${encodeURIComponent(
																item.title.replace(/\s+/g, "-")
															)}`,
														});
														// router.push({
														//   pathname: "/ArticleDetail",
														//   query: { data: item?.id },
														// });
													}}
												>
													{item.title}
												</DropdownItem>
											))
										) : (
											<DropdownItem>No matching results</DropdownItem>
										)}
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>
					</div>
					<div
						class={`Routes d-flex align-items-center
					${language == "en"
								? "col-lg-6 col-md-8"
								: language == "fr"
									? "col-lg-7 col-md-8"
									: "col-lg-7 col-md-8"
							} col-sm-12 col-xs-12 flex-wrap`}
					>
						<button
							className={`${pathname == "/News" ? "nav-bg px-3 py-1 mx-1" : ""}`}
						>
							<Link
								className={` pt-n2 nav-item text-decoration-none font-weight-bold fs--13 ${pathname == "/News" ? "text-dark " : "nav-text"
									}`}
								href="/News"
							>
								News
							</Link>
						</button>
						<button
							className={` ${pathname == "/ServicePros" ? "nav-bg px-3 py-1 mx-1" : ""
								}`}
						>
							<Link
								className={` nav-item mt-n1 text-decoration-none font-weight-bold fs--13 ${pathname == "/ServicePros" ? "text-dark " : "nav-text"
									}`}
								href="/ServicePros"
								style={{ whiteSpace: "nowrap" }}
							>
								Service PROS
							</Link>
						</button>
						<button
							className={`  ${pathname == "/WorkForce" ? "nav-bg px-3 py-1 mx-1 " : ""
								}`}
						>
							<Link
								className={` nav-item mt-n1 text-decoration-none font-weight-bold fs--13 ${pathname == "/WorkForce" ? "text-dark " : "nav-text"
									}`}
								href="/WorkForce"
							>
								WorkForce
							</Link>
						</button>

						<button
							className={`  ${pathname == "/Utilities" ? "nav-bg px-3 py-1 mx-1 " : ""
								}`}
						>
							<Link
								className={` nav-item mt-n1 text-decoration-none font-weight-bold fs--13 ${pathname == "/Utilities" ? "text-dark " : "nav-text"
									}`}
								href="/Utilities"
							>
								Utilities
							</Link>
						</button>

						<button
							className={`  ${pathname == "/CPOs" ? "nav-bg px-3 py-1 mx-1 " : ""
								}`}
						>
							<Link
								className={` nav-item mt-n1 text-decoration-none font-weight-bold fs--13 ${pathname == "/CPOs" ? "text-dark " : "nav-text"
									}`}
								href="/CPOs"
							>
								CPOs
							</Link>
						</button>

						<button
							className={`  ${pathname == "/Gov" ? "nav-bg px-3 py-1 mx-1 " : ""
								}`}
						>
							<Link
								className={` nav-item mt-n1 text-decoration-none font-weight-bold fs--13 ${pathname == "/Gov" ? "text-dark " : "nav-text"
									}`}
								href="/Gov"
							>
								.Gov
							</Link>
						</button>
					</div> */}
				</div>
			</div>
			<div>
				<div className={`new-nav-div ${language == "en" ? 'nav-div-en' : ''} ${language == "fr" ? 'nav-div-fr' : ''} ${language == "es" ? 'nav-div-es' : ''} ${language == "pt" ? 'nav-div-pt' : ''}`}>
					<div class="search">
						<div class="input-group position-relative">
							<span class="Search_icon" id="basic-addon1" style={{zIndex:1}}>
								<FaSistrix />
							</span>
							<input
								type="text"
								placeholder="Search"
								className={`form-control search ${language == "en" ? 'right-border-en' : ''} ${language == "fr" ? 'right-border-fr' : ''} ${language == "es" ? 'right-border-es' : ''} ${language == "pt" ? 'right-border-pt' : ''}`}
								aria-label="Username"
								aria-describedby="basic-addon1"
								value={searchText}
								onChange={handleInputChange}
								style={{ zIndex: 1 }}
							/>
							<div style={{ position: "absolute", left: "0px", top: "0px" }}>
								<Dropdown isOpen={showDropdown} toggle={handleDropdownToggle}>
									<DropdownToggle
										style={{ zIndex: -1 }}
										className="nav-bg border-0"
									></DropdownToggle>
									<DropdownMenu className="shadow-sm search-dropdown">
										{filturedArticles.length > 0 ? (
											filturedArticles.map((item, index) => (
												<DropdownItem
													key={index}
													className="dropdown-item-style"
													onClick={() => {
														router.push({
															pathname: `${encodeURIComponent(
																item.title.replace(/\s+/g, "-")
															)}`,
														});
														// router.push({
														//   pathname: "/ArticleDetail",
														//   query: { data: item?.id },
														// });
													}}
												>
													{item.title}
												</DropdownItem>
											))
										) : (
											<DropdownItem>No matching results</DropdownItem>
										)}
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>
					</div>
					<div class={`grid-container ${language == "fr" ? 'grid-container-fr' : ''} ${language == "pt" ? 'grid-container-pt' : ''}`}>
						<Link className={`grid-item text-decoration-none ${pathname == "/News" ? 'active-href m-1' : '' }`} href="/News">News</Link>
						<Link className={`grid-item text-decoration-none ${pathname == "/ServicePros" ? 'active-href m-1' : '' }`} href="/ServicePros" >Service PROs</Link>
						<Link className={`grid-item text-decoration-none ${pathname == "/WorkForce" ? 'active-href m-1' : '' }`} href="/WorkForce" >Workforce</Link>
						<Link className={`grid-item text-decoration-none ${pathname == "/Utilities" ? 'active-href m-1' : '' }`} href="/Utilities" >Utilities</Link>
						<Link className={`grid-item text-decoration-none ${pathname == "/CPOs" ? 'active-href m-1' : '' }`} href="/CPOs" >CPOs</Link>
						<Link className={`grid-item text-decoration-none ${pathname == "/Gov" ? 'active-href m-1' : '' }`} href="/Gov" >.Gov</Link>
					</div>
				</div>
			</div>
		</>
	);
}
