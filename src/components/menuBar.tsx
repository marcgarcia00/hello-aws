import React from 'react';
import { Link } from 'react-router-dom';

export type HyperlinkProps = {
  display: string,
  linkClicked: any;
}

interface Props {
  hyperlinks: HyperlinkProps[]
}

function MenuBar(props: Props) {
  let menuBar:any = [];
  
  props.hyperlinks.map((hyperlink: HyperlinkProps) => {
    menuBar.push(
      <div className="mx-3 text-xl tracking-wider font-bold text-white cursor-pointer" onClick={() => hyperlink.linkClicked() }>{hyperlink.display}</div>
    );
  })
  return(
    <div className="flex flex-row w-full justify-center bg-blue-500 p-2 mb-5">
      <div className="flex flex-col w-full">
        <h3 className='text-left text-3xl text-white font-bold'>PLANNING POKER</h3>
      </div>
      <div className="flex flex-col w-full justify-center items-end">
        <div className="w-1/2 flex flex-row space-evenly">
          { menuBar }
        </div>
      </div>
    </div>
  );
}
export default MenuBar;