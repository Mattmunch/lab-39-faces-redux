import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { takeNap, drinkCoffee, study, eatSnack } from '../actions/moodActions';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export const Moods = () => {

  const dispatch = useDispatch();
  
  const { coffees, snacks, naps, studies } = this.state;
  const face = getFace(this.state);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  )
};

// export default class Moods extends Component {

//   render() {
//     const { coffees, snacks, naps, studies } = this.state;
//     const face = getFace(this.state);

//     return (
//       <>
//         <Controls>
//           <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
//           <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
//           <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
//           <button onClick={() => this.handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
//         </Controls>
//         <Face emoji={face} />
//       </>
//     );
//   }
// }
