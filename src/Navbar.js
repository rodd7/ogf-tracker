import "./navbar.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
function Time() {
	return new Date().toLocaleTimeString();
}

export default function Navbar() {
	return (
		<div className="Navbar">
			<div id="front">
				<img
					className="flightLogo md:float-left"
					src={require("./assets/flightLogo.png")}
				/>
				<p id="mainText" className="phase hidden md:block md:overflow-hidden;">
					OGFLiveFlight
				</p>
			</div>
			<div id="navbar">
				<ul className="nav">
					<li className="nav">
						<a className="nav" id="NationIndex" href="#">
							Flight Tracker
						</a>
					</li>
					<li className="nav">
						<a className="nav" href="#">
							Train Tracker
						</a>
					</li>
					<li className="nav">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="nav">
									NationIndex
									<ChevronDownIcon
										className="float-right h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-blue-100 text-gray-900"
															: "text-gray-600",
														"block px-4 py-2 text-xs",
													)}
												>
													Passport Index
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-blue-100 text-gray-900"
															: "text-gray-600",
														"block px-4 py-2 text-xs",
													)}
												>
													Diplomacy Index
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>

					<li className="nav">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="nav">
									Miscellaneous
									<ChevronDownIcon
										className="float-right h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-blue-100 text-gray-900"
															: "text-gray-600",
														"block px-4 py-2 text-xs",
													)}
												>
													FlightLines Generator
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-blue-100 text-gray-900"
															: "text-gray-600",
														"block px-4 py-2 text-xs",
													)}
												>
													Map Distance Calculator
												</a>
											)}
										</Menu.Item>
									</div>
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-blue-100 text-gray-900"
															: "text-gray-600",
														"block px-4 py-2 text-xs",
													)}
												>
													/Placeholder
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>
					<li className="nav">
						<b className="timeTxt">time</b>
					</li>
				</ul>
			</div>

			<hr id="line" className="hidden md:block" />
		</div>
	);
}
