import React from "react"
import navigationItems from "../data/navigation-data.json"
import NavLink from './navLink';

const Navigation = () => {
  return (
    <div>
      {navigationItems.map((navItem, i) => {
        if (navItem.children) {
          return (
            <div className="my-5">
              <p className="mb-3 text-teal-300 border-b-2 border-teal-300 ">
                {navItem.name}
              </p>

              <div className="ml-6">
                {navItem.children.map((childItem, j) => (
                  <NavLink
                    route={childItem.route}
                    text={childItem.name}
                    key={`${childItem.route}_${j}`}
                  />
                ))}
              </div>
            </div>
          )
        } else {
          return (
            <NavLink
              route={navItem.route}
              text={navItem.name}
              key={`${navItem.route}_${i}`}
            />
          )
        }
      })}
    </div>

    // <>
    //   {navigationItems.map((navItem, i) => {
    //     if (navItem.children) {
    //       return (
    //         <div className="my-2" key={`${navItem.route}_${i}`}>
    //           <p className="pb-1 my-1 mb-2 text-gray-500 border-b-2 border-gray-600">
    //             {navItem.name}
    //           </p>

    //           <div className="flex flex-col">
    //             {navItem.children.map((childItem, j) => (
    //               <NavLink
    //                 route={childItem.route}
    //                 text={childItem.name}
    //                 key={`${childItem.route}_${j}`}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       )
    //     }

    //     return (
    //       <NavLink
    //         route={navItem.route}
    //         text={navItem.name}
    //         key={`${navItem.route}_${i}`}
    //       />
    //     )
    //   })}
    // </>
  )
}

export default Navigation
