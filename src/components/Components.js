import React from 'react';
import axios from "axios";


export const Components = (props) => {
  
  const [count, setCount] = React.useState(0)

  function handleChange() {
    setCount(prevCount => prevCount + 1)
  }

  // const [data, setData] = React.useState([])
  // React.useEffect(() => {
  //   axios.get('file:///C:/Users/sarik/New%20folder/3rdYearProject/newProjectHunt/src/MOCK_DATA.json')
  //     .then(res => setData(res.data))
  // })
  // return data.map((p, index) => {
  //   return <p key={index}>{p.id} {p.heading} {p.img} {p.name} {p.para} {p.upVote}</p>
  // }) 

  return (
    <div>
      <h2 className="text-f20 font-bold mb-3 text-left text-gray-900">
        {props.heading ? "Today's Trends" :""}
      </h2>
      <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6">
        <div className="flex w-full">
          <ul className="w-full">
            <li>
              {/* product one */}
              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img src={props.img} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {props.name}
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      {props.paragraph}
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        {props.num}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded" onClick={handleChange}>
                    
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3 cursor-pointer">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block px-5" >
                      {count}
                    </span>
                  </div>
                </div>
              </div>
              {/* product one */}
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Components;
