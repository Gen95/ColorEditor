import React from "react";
import { useStore } from "store";
import { Button } from "components";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

import "./styles.scss";

export const ColorList = () => {
  const {
    state: { data, currentIndexItem },
    addColor,
    selectItem,
    updateData,
  } = useStore();

  const [items, setItems] = React.useState(
    data.map((item, index) => ({ ...item, id: index }))
  );
//   const [idMap, setIdMap] = React.useState({});
//   React.useEffect(()=>{
//     updateData(items);

//     // setItems(data.map((item, index) => ({ ...item, id: idMap[index] })))
//   }, [items]);

  React.useEffect(()=>{
    setItems(data.map((item, index) => ({ ...item, id: index })))
  }, [data])


  const handleAddColor = () => {
    addColor({
      name: "name",
      type: "main",
      color: "#000000",
    });
  };

  const handleSelectColor = (index) => {
    selectItem(index);
  };

  function onChange(_, sourceIndex, targetIndex) {
    const nextStateData = swap(items, sourceIndex, targetIndex);
    console.log("SourceIndex", sourceIndex);
    console.log("tARGETiNDEX", targetIndex);
    console.log("CurrentItemIndex", currentIndexItem);
    console.log("nextStateData", nextStateData);

    // setIdMap(newIdMap);
    setItems(nextStateData);
    updateData(nextStateData);
  }

  return (
    <div className="color-list">
      <GridContextProvider onChange={onChange}>
        <div className="color-list__container">
          <GridDropZone
            className="color-list__GridDropZone"
            id="items"
            boxesPerRow={5}
            rowHeight={60}
            style={{ height: "403px" }}
          >
            {items.map((item, index) => (
              <GridItem key={item.id}>
                <div
                  className={
                    index === currentIndexItem ? "item active" : "item"
                  }
                  style={{ backgroundColor: item.color }}
                  onClick={() => {
                    handleSelectColor(index);
                  }}
                />
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>

      <div className="color-list__add">
        <Button onClick={handleAddColor}>Add</Button>
      </div>
    </div>
  );
};
