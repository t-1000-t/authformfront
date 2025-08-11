import React from 'react'
import { Box, Button, Flex, IconButton, ListIcon, ListItem, Spacer } from '@chakra-ui/react'
import { MdCheckCircle, MdOutlineRestoreFromTrash } from 'react-icons/md'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'

const SortableNoteItem = React.memo(function SortableNoteItem({ item, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item._id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // subtle visual while dragging
    boxShadow: isDragging ? '0 8px 24px rgba(0,0,0,0.15)' : undefined,
    background: isDragging ? 'rgba(0,0,0,0.02)' : undefined,
    borderRadius: '12px',
  }

  return (
    <ListItem ref={setNodeRef} style={style}>
      <Flex align="center" gap={1} p={1}>
        {/* Drag handle: keyboard + pointer */}
        <IconButton
          aria-label="Drag to reorder"
          variant="ghost"
          size="sm"
          {...attributes}
          {...listeners}
          icon={<GripVertical size={18} />}
        />
        <Box flex="1" wordBreak="break-word">
          <ListIcon as={MdCheckCircle} color="green.500" />
          {item.text}
        </Box>
        <Spacer />
        <Button
          size="sm"
          height="28px"
          width="100px"
          border="1px"
          borderColor="red.500"
          leftIcon={<MdOutlineRestoreFromTrash size={14} />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Flex>
    </ListItem>
  )
})

export default SortableNoteItem
