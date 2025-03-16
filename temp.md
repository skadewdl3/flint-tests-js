**Optimize two_sum function with a hash map.**
Use a hash map to store each number and its index. This allows to find the complement in O(n).


```rust
fn two_sum(nums: Vec<i32>, target: i32) -> Option<(usize, usize)> {
    use std::collections::HashMap;
    let mut map = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        match map.get(&(target - num)) {
            Some(&j) => return Some((j, i)),
            None => map.insert(num, i),
        };
    }
    None
}
```


**Remove the unnecessary outer loop.**
Remove the unnecessary outer loop that iterates through the length of the vector.


```rust
for _ in 0..nums.len() {
```

