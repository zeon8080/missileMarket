import { useQueryItem } from "../../../../src/components/commons/hooks/query/useQueryItem";
import ItemWrite from "../../../../src/components/units/usedItem/write/ItemWrite.index";

export default function ItemEditPage() {
  const { data } = useQueryItem();

  return <ItemWrite isEdit={true} data={data} />;
}
