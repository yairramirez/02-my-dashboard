'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getAPiCounter = async() => {
  const data = await fetch('/api/counter')
    .then( res => res.json() );

    return data as CounterResponse;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const counter = useAppSelector( state => state.counter.count );
  const dispatch = useAppDispatch();

  // const [counter, setCounter] = useState<number>( value );
  /* useEffect(() => {
    dispatch( initCounterState(value) )
  }, [dispatch, value]); */

  useEffect(() => {
    getAPiCounter()
      .then( ({ count }) => dispatch( initCounterState(count) ));
  }, [dispatch]);
  
  

  return (
    <>
      <span className="text-9xl">{ counter }</span>

      <div className="flex flex-row">
        <button
          onClick={() => dispatch( substractOne() )}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch( addOne() )}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  )
}
