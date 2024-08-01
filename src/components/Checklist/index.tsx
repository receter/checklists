import { concatClassNames as cn } from "@sys42/utils";

import { usePersistentState } from "../../hooks/usePersistentState";
import styles from "./styles.module.css";

export type ChecklistItem = {
  id: string;
  title: string;
  completed: boolean;
};

type ChecklistProps = {
  initialItems: ChecklistItem[];
};

export function Checklist({ initialItems }: ChecklistProps) {
  const [items, setItems] = usePersistentState<ChecklistItem[]>(
    "checklist-items",
    initialItems,
  );

  function handleClickReset() {
    setItems(initialItems);
  }

  function onItemChange(id: string, completed: boolean) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  return (
    <div>
      {items.map((item) => (
        <ChecklistItem key={item.id} item={item} onItemChange={onItemChange} />
      ))}
      <button className={cn(styles.resetButton)} onClick={handleClickReset}>
        Reset checklist
      </button>
    </div>
  );
}

type ChecklistItemProps = {
  item: ChecklistItem;
  onItemChange: (id: string, completed: boolean) => void;
};

function ChecklistItem({ item, onItemChange }: ChecklistItemProps) {
  return (
    <div
      className={cn(
        styles.item,
        item.completed === true && styles.item_completed,
      )}
    >
      <label className={cn("custom-checkbox", styles.label)}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e) => onItemChange(item.id, e.target.checked)}
        />
        <span>{item.title}</span>
      </label>
    </div>
  );
}
