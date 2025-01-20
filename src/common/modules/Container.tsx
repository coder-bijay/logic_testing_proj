"use client";

import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface Section {
  id: string;
  title: string;
}

export const DraggableContainer: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: "1", title: "Personal" },
    { id: "2", title: "Employee" },
    { id: "3", title: "Job" },
  ]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside a valid destination or in the same position
    if (!destination || source.index === destination.index) return;

    // Reordering the array
    const reordered = Array.from(sections);
    const [moved] = reordered.splice(source.index, 1);
    reordered.splice(destination.index, 0, moved);
    setSections(reordered);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-green-100">
      <h1 className="text-2xl font-bold mb-4">Draggable Sections</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections" direction="vertical">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-4"
            >
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`border border-gray-300 rounded-lg p-4 bg-white shadow-sm ${
                        snapshot.isDragging ? "dragging" : ""
                      }`}
                    >
                      {section.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
