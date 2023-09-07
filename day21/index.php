<?php
class Node {
    public $data;
    public $left;
    public $right;
 
    function __construct($data) {
        $this->data = $data;
        $this->left = null;
        $this->right = null;
    }
 }
 
 function isSumTree($root) {
    if ($root == null || ($root->left == null && $root->right == null)) {
        return true;
    }
 
    $leftSum = sumTree($root->left);
    $rightSum = sumTree($root->right);
 
    if ($root->data == $leftSum + $rightSum && isSumTree($root->left) && isSumTree($root->right)) {
        return true;
    }
 
    return false;
 }
 
 function sumTree($node) {
    if ($node == null) {
        return 0;
    }
 
    return $node->data + sumTree($node->left) + sumTree($node->right);
 }
 

 $root = new Node(3);
 $root->left = new Node(1);
 $root->right = new Node(2);

 
 if (isSumTree($root)) {
    echo "The binary tree is a sum tree.";
 } else {
    echo "The binary tree is not a sum tree.";
 }
?>