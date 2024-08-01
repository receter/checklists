import { ChecklistItem } from "../components/Checklist";

export function testIdUnique(items: ChecklistItem[]) {
  const idSet = new Set();
  items.forEach((item) => {
    if (idSet.has(item.id)) {
      throw new Error(`Duplicate id: ${item.id}`);
    }
    idSet.add(item.id);
  });
}
