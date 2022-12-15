<h1>IO test and reference<H1>
  
This is a document for the user to test the program and trouble shooting<p>
  
<h2>IO Test<h2>

  For adding the apparatus and records, we tried multiple input with different value and types, the outcomes are normal and within expectation. Also, the deletion of the apparatus works well
  <img width="912" alt="截屏2022-12-15 19 19 46" src="https://user-images.githubusercontent.com/58661494/207846395-9e14bdb0-29b9-40b7-854f-cadafc2843e7.png">
  
  <img width="912" alt="截屏2022-12-15 19 25 55" src="https://user-images.githubusercontent.com/58661494/207847550-c2a9fc8f-3651-4450-a44f-44a153173e39.png">
  
  <img width="912" alt="截屏2022-12-15 19 27 44" src="https://user-images.githubusercontent.com/58661494/207847906-2f21807b-5f23-429f-8cdd-85d00791131a.png">
For accident report, we entered different values and the program successfully generate a log file 
  
  <img width="912" alt="截屏2022-12-15 19 33 03" src="https://user-images.githubusercontent.com/58661494/207849017-d3888e3d-eef7-4247-9f05-f20990b5f571.png">

  
<img width="809" alt="截屏2022-12-15 19 32 14" src="https://user-images.githubusercontent.com/58661494/207848860-fd8e7735-d835-40e2-9395-ffe872d81c6d.png">

  The DNA-Alignment tool is based on the needle-Wunsch algorithm, a genetic algorithm which utilizes dynamic-planning, which elucidates an optimal alignment between two DNA nucleotide sequences (ATCG). Using Javascript, A 2D-array is first constructed, whilst the sequence of the DNAs is arranged in the first row and the first column of the array. The function DNA_Align() will be initiated after clicking the button on the user interface. Here is a simplified explanation of how Needleman-Wunsch algorithm works:![image](https://user-images.githubusercontent.com/58661494/207851934-7ec26d79-5d4a-42f9-a429-63b3fe303672.png)

  <img width="241" alt="image" src="https://user-images.githubusercontent.com/58661494/207852093-b1d26b56-f0cb-4d9f-9774-b04940906117.png">

  Moving diagonally means that the sequence of DNAs is either “matched” or “mismatched”, if matched, score +1, if mismatched, score -1. If move horizontally or vertically, a “gap” is created and the score will be -1. The highest possible score for each cell is calculated independently, while the bottom-right cell is the end of the optimum solution. Then the program search back to find the pathway it had gone through.![image](https://user-images.githubusercontent.com/58661494/207852115-45b09199-cee1-4f9f-b33d-6aa1acd4bc01.png)

  <img width="268" alt="image" src="https://user-images.githubusercontent.com/58661494/207852134-dec9e9c4-5eb3-446d-be8f-f5e44d04dfcf.png">

  The initiation of the whole program,  onclick=”DNA_Align()”!
  
<img width="432" alt="image" src="https://user-images.githubusercontent.com/58661494/207852233-cbeb75bd-4bd7-4a6c-b56f-b554c8acdf0f.png">

  Retrieving the user input from HTML form
  
  <img width="379" alt="image" src="https://user-images.githubusercontent.com/58661494/207852383-1bea460c-4ddc-4bb9-8913-b85eac54eee1.png">

  A 2D-array named as board[][] is created, and the calculation of each cell’s optimum score and movement is calculated. “T” means top, “L” means left, “D” means diagonal, these locants indicates where the path comes from.![image](https://user-images.githubusercontent.com/58661494/207852477-23a2d426-05e7-47e7-9283-33bc2f27b96b.png)
  

  <img width="311" alt="image" src="https://user-images.githubusercontent.com/58661494/207852566-dd3758ff-07ee-4ede-9d4d-e331a8a72af9.png">

 
  This part of the algorithm search back from the bottom-right block to the top-left block, to elucidate the optimum pathway.![image](https://user-images.githubusercontent.com/58661494/207852578-fc0c878c-955c-492c-9d6c-1a8b740fe6e0.png)
  
<img width="432" alt="image" src="https://user-images.githubusercontent.com/58661494/207852589-2dc498a6-9b42-4892-9297-cf2ad6737dab.png">
  
This is the final presentation of data to the user, by altering the content of HTML elements.
There are more details of this algorithm in the source code.
  
  To test the functionality of the program, with first tested whether the prototype is able to create a successful alignment between very short and simple sequences.
We used short sequences:
1.	ACAGTCGATCGTACC
2.	CGATCAGTCGATGAT
To debug our program, here is a screenshot of our testing:

  <img width="432" alt="image" src="https://user-images.githubusercontent.com/58661494/207852773-baa8cd07-a573-49f8-b8f6-12f2d013f38e.png">

  After proved its feasibility, we introduced two long sequences to test its ability:
1.	CACGACGTCGGCACGATCGTACGTCTACGCTAGCGACGATCGATCGTGCTGCTGTAGCACTGCATCGATCGTCATCGATGCTG
2.	CGATCAGCTCGTCGTCGATCGATCGTGACTGCTGTCGACTGATCAGTCGATCGATCGATGCTCT

  <img width="432" alt="image" src="https://user-images.githubusercontent.com/58661494/207852831-85d436fe-cf03-43d6-ab75-97a7c00743ae.png">

  Success! And the program shows a great extent of adaptability to the disparities in the length of DNA sequences between two inputs: Gaps are created.![image](https://user-images.githubusercontent.com/58661494/207852848-d96c0a09-6a0b-4c4b-a49f-09d910b41b8a.png)




  <h2>Reference<h2>
    electronjs.org. (n.d.). 简介 | Electron. [online] Available at: 
    https://www.electronjs.org/zh/docs/latest/

    Smith, T F et al. “Comparative biosequence metrics.” Journal of molecular evolution vol. 18,1 
    (1981): 38-46. doi:10.1007/BF01733210

    How to Create a Two Dimensional Array in JavaScript. (n.d.). Retrieved December 15, 2022, from
    www.w3docs.com website: https://www.w3docs.com/snippets/javascript/how-to-create-a-two-
    dimensional-array-in-javascript.html
    

‌
    
‌
