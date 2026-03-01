class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        # The LinkedList manages its own head pointer
        self.head = None
    
    def insert_at_beginning(self, data):
        """Insert a new node at the beginning"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def insert_at_end(self, data):
        """Insert a new node at the end"""
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def delete_at_beginning(self):
        """Delete the first node"""
        if self.head is None:
            print("Error: Linked list is empty")
            return None
        
        deleted_data = self.head.data
        self.head = self.head.next
        return deleted_data
    
    def delete_at_end(self):
        """Delete the last node"""
        if self.head is None:
            print("Error: Linked list is empty")
            return None
        
        if self.head.next is None:
            deleted_data = self.head.data
            self.head = None
            return deleted_data
        
        current = self.head
        while current.next.next:
            current = current.next
        
        deleted_data = current.next.data
        current.next = None
        return deleted_data
    
    def delete_by_value(self, value):
        """Delete the first node with the given value"""
        if self.head is None:
            print("Error: Linked list is empty")
            return False
        
        # If head node needs to be deleted
        if self.head.data == value:
            self.head = self.head.next
            return True
        
        current = self.head
        while current.next:
            if current.next.data == value:
                current.next = current.next.next
                return True
            current = current.next
        
        print(f"Value {value} not found in the list")
        return False
    
    def search(self, value):
        """Search for a value in the linked list"""
        current = self.head
        position = 0
        
        while current:
            if current.data == value:
                return position
            current = current.next
            position += 1
        
        return -1
    
    def traverse(self):
        """Print all elements in the linked list"""
        if self.head is None:
            print("Empty list")
            return
        
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
    
    def is_empty(self):
        """Check if the linked list is empty"""
        return self.head is None
    
    def size(self):
        """Return the number of nodes in the linked list"""
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count
    
    def __str__(self):
        """String representation of the linked list"""
        if self.head is None:
            return "Empty List"
        
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return " -> ".join(elements) + " -> None"


# Driver Code
if __name__ == "__main__":
    # Create a new linked list
    ll = LinkedList()
    
    # Insert elements
    ll.insert_at_beginning(4)
    ll.insert_at_beginning(3)
    ll.insert_at_beginning(2)
    ll.insert_at_beginning(1)
    
    print("Original list:")
    ll.traverse()
    print(f"Using __str__: {ll}")
    print(f"Size: {ll.size()}")
    
    # Delete at beginning
    deleted = ll.delete_at_beginning()
    print(f"\nDeleted: {deleted}")
    print("After deletion:")
    ll.traverse()
    
    # Insert at end
    ll.insert_at_end(5)
    print("\nAfter inserting 5 at end:")
    ll.traverse()
    
    # Search for a value
    position = ll.search(3)
    print(f"\nValue 3 found at position: {position}")
    
    # Delete by value
    ll.delete_by_value(3)
    print("After deleting value 3:")
    ll.traverse()
    
    # Delete at end
    ll.delete_at_end()
    print("\nAfter deleting at end:")
    ll.traverse()
    
    print(f"\nIs empty? {ll.is_empty()}")
    print(f"Final size: {ll.size()}")
    