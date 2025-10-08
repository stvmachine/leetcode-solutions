class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        for(int j=0; j < n; j++){
            nums1[m+j] = nums2[j]; 
        }

        bubbleSort(nums1);
    }

    void bubbleSort(vector<int>& arr)
    {
        int i, j;
        bool swapped;
        for (i = 0; i < arr.size() - 1; i++) {
            swapped = false;
            for (j = 0; j < arr.size() - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    swapped = true;
                }
            }

            // If no two elements were swapped
            // by inner loop, then break
            if (swapped == false)
                break;
        }
    }
};