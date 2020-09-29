import React from 'react';
import {mergeSort} from '../SortingAlgorithms/Merge';
import {bubbleSort} from '../SortingAlgorithms/Bubble';
import {selectionSort} from '../SortingAlgorithms/Selection';
import {insertionSort} from '../SortingAlgorithms/Insertion'
import { ToastContainer, toast } from 'react-toastify';
import './SortingVisualizer.css';
import 'tachyons';

import 'react-toastify/dist/ReactToastify.css';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < 130; i++) {
      array.splice(0, array.length, ...(new Set(array)));
      array.push(randomIntFromInterval(20, 600));
    }
    this.setState({array});
  }
  
  mergeSort() {
    const animations = mergeSort(this.state.array);
    animateAlgorithm(animations, 7);
    setTimeout(() => {
    mergeNotification()}, 1000)
  }

  insertionSort() {
    const animations = insertionSort(this.state.array);
    animateAlgorithm(animations, 1);
    setTimeout(() => {
      insertionAnimation()}, 1000)
  }

  selectionSort() {
    const animations = selectionSort(this.state.array);
    animateAlgorithm(animations, 0.5);
    setTimeout(() => {
      selectionAnimation()}, 1000)
  }

  bubbleSort() {
    const animations = bubbleSort(this.state.array);
    animateAlgorithm(animations, 0.7);
    setTimeout(() => {
      bubbleAnimation()}, 1000)
  }

  render() {
    const {array} = this.state;

    return (
      <div className="">
      <div className = "title i f2 ph2 pv1 mb1 white ">  Sorting Visualizer </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar br-pill"
            key={idx}
            style={{
              backgroundColor: "white",
              height: `${value}px`,
            }}></div>
        ))}
        <div className="buttons">
        <button className = "f6 grow  br-pill ph3 pv2 mb2 dib white bg-dark-gray ma3" onClick={() => window.location.reload()}> Generate New Array </button>
        <button className = "f6 grow  br-pill ph3 pv2 mb2 dib white bg-dark-gray ma3" onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className = "f6 grow  br-pill ph3 pv2 mb2 dib white bg-dark-gray ma3" onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button className = "f6 grow  br-pill ph3 pv2 mb2 dib white bg-dark-gray ma3" onClick={() => this.selectionSort()}>Selection Sort</button>
        <button className = "f6 grow  br-pill ph3 pv2 mb2 dib white bg-dark-gray ma3" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
      <ToastContainer />
      </div>
    );
  }
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animateAlgorithm(animations, speed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? "tomato" : " rgb(124, 197, 169)";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      },  i * speed);
    }
  }
}
function mergeNotification() {
  toast.info(<div>Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. 
 It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

 Time Complexity: Θ(n log(n));
 Space Complexity: O(n);
  </div>, {
      position: "top-left",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      
  });
}

function insertionAnimation() {
  toast.info(<div>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.  At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
  
  Time Complexity: Θ(n^2);
  Auxiliary Space: O(1);
    </div>, {
      position: "top-left",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
}
function selectionAnimation() {
  toast.info(<div>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
        
  Time Complexity: Θ(n^2);
  Auxiliary Space: O(1);
    </div>, {
      position: "top-left",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
}
function bubbleAnimation() {
  toast.info(<div>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
    
  Time Complexity: Θ(n^2);
  Auxiliary Space: O(1);
    </div>, {
      position: "top-left",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
}
  


