import React from "react";

interface NavbarProps {
    filterItem: (category: string) => void;
    menuList: string[];
}


const productNavbar: React.FC<NavbarProps> = ({ filterItem, menuList }) => {

    // console.log(menuList)
    return (
        <>
            <nav className="menu-navbar px-10">
                <h2 className="poppins-semibold text-3xl">Brands</h2>
                <div className="menu-btn-group">
                    {menuList.map((curElem) => (
                        <button
                            key={curElem}
                            className="rounded-2xl w-40 h-16 bg-slate-300 mx-2 text-lg focus:bg-slate-400"
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default productNavbar;