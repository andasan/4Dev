import React from "react";
import Code from 'react-code-prettify';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {
  }
  
  render() {
    const bubbleSort = `
    const list = [2, 1, 4, 3];
    console.log(bubbleSort(list));

    function bubbleSort(list){
      let swap = false, value = 0;
      do{
          swap = false;
          for(let i = 0; i < list.length; i++){
              if(list[i+1] < list[i]){
                  value = list[i];
                  list[i] = list[i+1];
                  list[i+1] = value;
                  swap = true;
              }
          }
      }while(swap);
   
      return list;
   }`

    const insertionSort = `
    const list = [2, 1, 4, 3];
    console.log(insertionSort(list));
    
    function insertionSort (items) {
        // loop through the items in the sorted array
        for (var i = 0; i < items.length; i++) {
            let value = items[i];
        
            // compare selected item to each items in the array
            for (var j = i - 1; j > -1 && items[j] > value; j--) {
                // Change the index number of the item
                items[j + 1] = items[j];
            }
            // Sorted items correctly
            items[j + 1] = value;
        }
        return items
    }`

    const mergeSort = `
    let unsortedArray = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
    let result = mergeSort(unsortedArray);
    console.log(result);

    function mergeSort(unsortedArray) {
        // No need to sort the array if the array only has one element or empty
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        // In order to divide the array in half, we need to figure out the middle
        const middle = Math.floor(unsortedArray.length / 2);
    
        // This is where we will be dividing the array into left and right
        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);
    
        // Using recursion to combine the left and right
        return merge(mergeSort(left), mergeSort(right));
    }
    
    // Merge the two arrays: left and right
    function merge (left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
    
        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
        }
    }

    // We need to concat to the resultArray because there will be one element left over after the while loop
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };`

    const selectionSort = `
    const list = [4, 2, 3, 1, 5];
    const sorted = selectionSort(list);
    console.log(sorted);

    function selectionSort(list)
    {
        let len = list.length;
        for (let i=0; i < len; i++)
        {
            let min = i;
            for(let j=i+1; j < len; j++)
            {
                if(list[j] < list[min])
                {
                    min = j;
                }
            }
            const temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
        return list;   
    }
    `

    const quickSort = `
    const list = [3, 2, 4, 1, 5];
    const sorted = quickSort(list);
    console.log(sorted);

    function quickSort(list){
        let len = list.length;
        let pivot = list[len-1]; //make the last number as the pivot
        let left = [];
        let right = [];
        
        if(len <= 1){
            return list;
        }

        for(let i = 0; i < len-1; i++) //Iterative
        {
            if(list[i] < pivot)
            {
              //push the smaller numbers to the left
              left.push(list[i]); 
            }
            else{
              //push the larger numbers to the right
              right.push(list[i]); 
            }
        }
        //recursive function (... = spread syntax)
        return [...quickSort(left), pivot, ...quickSort(right)]; 
     }
    `


    return (
      <div className="section section-codeblock" id="basic-elements" >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h2 className="title">Sorting Algorithm</h2>
          
          <div className="space-100" />
          <div id="bubble-code" className="space-70" />
          <div className="space-100" />

          <Row>
            <Col md="6">
                <h1>Bubble Sort</h1><br/>
                <h3>Bubble Sort is the simplest sorting algorithm that works by repeatedly 
                  swapping the adjacent elements if they are in wrong order.</h3>
                <br/>
            </Col>
            <Col md="6"><Code codeString={bubbleSort} language="javascript" /></Col>
          </Row>
          <div className="space-30" />

          <div className="space-100" />
          <div id="insertion-code" className="space-100" />
          <div className="space-100" />

          <Row>
            <Col md="6">
                <Code codeString={insertionSort} language="javascript" />
            </Col>
            <Col md="6">
              <h1>Insertion Sort</h1><br/>
              <h3>Insertion sort is a simple sorting algorithm that works 
                the way we sort playing cards in our hands.</h3>
              <br/>
            </Col>
          </Row>
          
          <div className="space-100" />
          <div id="merge-code" className="space-100" />
          <div className="space-100" />

          <Row>
            <Col md="5">
              <h1>Merge Sort</h1><br/>
              <h3>Merge Sort divides input array in two halves, calls itself for 
                the two halves and then merges the two sorted halves. <br/>
                <br/>
                The merge() function is used for merging two halves and is a key process 
                that assumes, sort and merges the two sorted sub-arrays into one. </h3>
            </Col>
            <Col md="7">
                <Code codeString={mergeSort} language="javascript" />
            </Col>
          </Row>
          
          <div className="space-100" />
          <div id="selection-code" className="space-100" />
          <div className="space-100" />

          <Row>
            <Col md="6">
                <Code codeString={selectionSort} language="javascript" />
            </Col>
            <Col md="6">
              <h1>Selection Sort</h1><br/>
              <h3>The selection sort algorithm sorts an array by repeatedly finding the minimum element 
                from unsorted part and putting it at the beginning. 
                The algorithm maintains two subarrays in a given array.<br/>
                <br/>
                1) The subarray which is already sorted.<br/>
                2) Remaining subarray which is unsorted.<br/>
                <br/>
                In every iteration of selection sort, the minimum element 
                from the unsorted subarray is picked and moved to the sorted subarray.</h3>
              <br/>
            </Col>
          </Row>
          
          <div className="space-100" />
          <div id="quick-code" className="space-100" />
          <div className="space-100" />

          <Row>
            <Col md="6">
                <Code codeString={quickSort} language="javascript" />
            </Col>
            <Col md="6">
              <h1>Quick Sort</h1><br/>
              <h3>Quicksort uses recursion, divide-and-conquer and comparison-sort. It works by partitioning an array 
                into two sub-arrays and then recursively sorting those arrays independently. To make it clear, let’s put this in 3 main steps:
                <br/><br/>
                Choose the pivot (reference value).<br/>
                Divide the rest of the array in two, placing everything smaller than the pivot on the left and greater than the pivot on the right.<br/>
                Recursively apply the previous steps to the sub-arrays if they have more than 1 element.
              </h3>
              <br/>
            </Col>
          </Row>
          
          <div className="space-50" />
        </Container>
      </div>
    );
  }
}

export default CodeBlock;
