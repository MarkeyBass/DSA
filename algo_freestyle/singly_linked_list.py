class Node:
    def __init__(self, data):
        # Node holds data and a pointer to the next node
        self.data = data
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        # Head pointer of the list
        self.head = None

    def insert_at_beginning(self, data):
        # Insert a new node at the beginning
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete_at_beginning(self):
        # Delete the node at the beginning and return its data
        if self.head is None:
            print("Error: Singly linked list is empty")
            return None
        removed = self.head
        self.head = removed.next
        data = removed.data
        del removed
        return data

    def traverse(self):
        # Traverse the list and print its elements
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    def __iter__(self):
        current = self.head
        while current:
            yield current.data
            current = current.next

    def __len__(self):
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
        return length

    def __str__(self):
        return " -> ".join(str(x) for x in self) + " -> None"


if __name__ == "__main__":
    # Example usage without exposing head or free functions
    sll = SinglyLinkedList()
    sll.insert_at_beginning(4)
    sll.insert_at_beginning(3)
    sll.insert_at_beginning(2)
    sll.insert_at_beginning(1)

    # Keep a reference to the original head node to illustrate behavior
    original_head = sll.head

    sll.traverse()
    removed_value = sll.delete_at_beginning()
    print(f"Removed: {removed_value}")
    sll.traverse()

    # Demonstrate that old head still references the detached sublist
    # starting from the original head node
    current = original_head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

    print(sll)