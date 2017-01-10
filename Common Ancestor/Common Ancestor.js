
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  // TODO: implement me!
  var closest = null;
  
  if (child1 === child2) {return child1;}
  
  if (this.isDescendant(child1) && this.isDescendant(child2)) {
    
    closest = this;
    //check the children
    for (var i = 0; i < this.children.length; i++) {
      //update closest if both children are part of this child tree
      closest = this.children[i].getClosestCommonAncestor(child1,child2) || closest;
    }
  }
  return closest;
  
}

Tree.prototype.getAncestorPath = function(node){
  var inner = function (node, result) {
    //result will be an empty arrray we pass in
    var i, childPath;

    // always push self onto result
    result.push(this);
    //the tree itself (origin node) is an ancestor of course

    if ( this === node ) {
      return result; // if the node equals the tree itself
    } 
    
    else if ( this.children.length === 0 ) {
      return null;
    }
    
    else {
      for (i = 0; i < this.children.length; i ++ ) {
        // as soon as any child is the node, return the childPath
        childPath = inner.call( this.children[i], node, result.slice() );
        if ( childPath ) {
          return childPath;
        }
      }
      return null;
    }
  };

  return inner.call(this, node, []);
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};