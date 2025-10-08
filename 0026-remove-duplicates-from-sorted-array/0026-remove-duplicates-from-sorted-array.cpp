#include <vector>
#include <iostream>

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int latestMatch;
        int i=0;
        
        while(i < nums.size()){
            if(latestMatch == nums[i]){
                std::cout << "Removing duplicated: " << nums[i] << "\n";
                nums.erase(nums.begin()+i);
            }
            else{
                latestMatch= nums[i];
                std::cout << "Found an unique number: " << latestMatch << "\n";
                i++;
            }
        }
        
        std::cout << "Output: ";
        for (int num: nums) 
        std::cout << num << ", ";
        
        return nums.size();
        
    }
};