import React, { useEffect, useState, useRef } from "react";
import {
	Col,
	Container,
	Row,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { updateLanguage } from "../store/action/languageAction";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
	const dispatch = useDispatch();
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [showBarDropdown, setShowBarDropdown] = useState(false);
	const [googleTranslateRef, setGoogleTranslateRef] = useState(null);

	const clearSiteData = () => {
		// Clear cookies
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i];
			const eqPos = cookie.indexOf("=");
			const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
		}

		// Clear local storage
		localStorage.clear();
	};

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		toggleDropdown(); // Close the flag dropdown after selecting a language
		clearSiteData();
		updateGoogleTranslateLanguage(language);
		const translateSelect = document.querySelector(".goog-te-combo");
		translateSelect.addEventListener("change", function () {
			var selectedLanguage = translateSelect.value;
			setSelectedLanguage(selectedLanguage);
			clearSiteData();
		});
		if (translateSelect) {
			for (let i = 0; i < translateSelect.options.length; i++) {
				if (translateSelect.options[i].value === language) {
					translateSelect.selectedIndex = i;
					break;
				}
			}
		}
	};
	const flagImages = {
		en: "uk.png",
		fr: "franc.png",
		es: "spain.png",
		pt: "portagal.png", // Replace with the actual image name
	};
	const languagesArray = ["en", "fr", "es", "pt"];
	const languagesString = languagesArray.join(",");
	let includedLanguages = languagesString;

	const googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement(
			{
				// pageLanguage: "en",
				includedLanguages: includedLanguages,
				autoDisplay: true,
			},
			"google_translate_element"
		);
	};
	const updateGoogleTranslateLanguage = (language) => {
		if (window.google && window.google.translate) {
			const translateSelect = document.querySelector(".goog-te-combo");
			if (translateSelect) {
				for (let i = 0; i < translateSelect.options.length; i++) {
					if (translateSelect.options[i].value === language) {
						translateSelect.selectedIndex = i;
						break;
					}
				}

				// Check if the element has an addEventListener method before adding the event listener
				if (translateSelect.addEventListener) {
					translateSelect.addEventListener("change", function () {
						var selectedLanguage = translateSelect.value;
						setSelectedLanguage(selectedLanguage);
						clearSiteData();
					});
				}

				// Trigger the change event
				const event = new Event("change");
				translateSelect.dispatchEvent(event);
			}
		}
	};

	useEffect(() => {
		var googleTranslator = document.getElementById("google-translator-script");
		if (!googleTranslator) {
			var addScript = document.createElement("script");
			addScript.setAttribute(
				"src",
				"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
			);
			addScript.setAttribute("id", "google-translator-script");
			document.body.appendChild(addScript);
			window.googleTranslateElementInit = googleTranslateElementInit;
		}
		clearSiteData();
	}, []);
	useEffect(() => {
		dispatch(updateLanguage(selectedLanguage));
	}, []);
	return (
		<div style={{ width: "100%", height: "100px", borderBottom: "1px solid #CCCCCC" }}>
			<div className="paddingHeader" >
				<Row className="headerRow">
					<Col md={4} xs={4} className="d-md-block">
						<div className="mt-4 language-main-div">
							<Dropdown
								isOpen={dropdownOpen}
								toggle={toggleDropdown}
								className="d-inline-block mt-n1 paddingDropdown"
							>
								<DropdownToggle className="notranslate background-white  border-0 text-dark language_font_size" style={{ color: "#0c071c", fontWeight: 500, padding: "0.35rem 0.0rem" }}>
									<span className="avatar avatar-sm rounded-circle">
										<img
											src={`/${flagImages[selectedLanguage]}`}
											alt="1"
											className="rounded-circle notranslate"
											height={21}
											style={{ marginRight: "13px" }}

										/>
									</span>
									{selectedLanguage == "en"
										? "USA (English)"
										: selectedLanguage == "fr"
											? "CAN (French)"
											: selectedLanguage == "es"
												? "MEX (Spanish)"
												: "BRA (Portuguese)"} <FontAwesomeIcon icon={faChevronDown} />
								</DropdownToggle>
								<DropdownMenu
									innerRef={(ref) => setGoogleTranslateRef(ref)}
									className="mt-n5 " style={{ boxShadow: "0px 5px 10px rgba(0,0,0,0.3)", border: "none", background: "#fafafa" }}
								>
									{languagesArray.map((language, index) => (
										<DropdownItem
											key={index}
											onClick={() => {
												dispatch(updateLanguage(language));
												handleLanguageChange(language);
											}}
											className="notranslate pl-3 pr-3 language_font_size" style={{ paddingTop: "12px", paddingBottom: "12px", fontWeight: 500, color: "#0c071c" }}>
											<span className="avatar avatar-sm rounded-circle mr-3">
												<img
													src={`/${flagImages[language]}`}
													alt="1"
													className="ml-1 rounded-circle"
													width={24}

												/>
											</span>
											{language == "en"
												? "USA (English)"
												: language == "fr"
													? "CAN (French)"
													: language == "es"
														? "MEX (Spanish)"
														: "BRA (Portuguese)"}
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
							<div className="d-none">
								<div
									id="google_translate_element"
									ref={(ref) => setGoogleTranslateRef(ref)}
								></div>
							</div>
						</div>
					</Col>
					<Col md={4} xs={4}>
						<div className="d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
							<Link className="headerLogo" href="/">
								<img
									className="logo"
									src="/logo1.png"
									alt="Grouparoo Logo"
									// width={"153px"}

								/>
							</Link>
						</div>
					</Col>
					<Col md={4} sm={4} xs={4} className="d-md-block " style={{ height: "100px", paddingTop: "13px" }}>
						<div className="d-flex align-items-center justify-content-end" style={{ marginRight: "-10px" }}

						>
							<Link
								className="text-dark" style={{ marginTop: "20px" }}
								target="_blank"
								href={"https://www.vehya.com/#/home"}
							>
								{/* <FaBars size={36} /> */}
								<img src="/menu.png" alt="Menu" />
							</Link>
						</div>
					</Col>
				</Row>
				{/* <hr /> */}
			</div>

		</div>
	);
}