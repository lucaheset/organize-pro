import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Todo {
  id: number;
  type: string;
  title: string;
  completed: boolean;
}

interface todosListInterface {
  todosList: Todo[];
}
import { CheckboxComponent } from "../CheckboxComponent/CheckboxComponent";

export function TableComponent({ todosList }: todosListInterface) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead>Status</TableHead>
          <TableHead>To do's</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todosList.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">
              <CheckboxComponent type="Estudo" />
            </TableCell>
            <TableCell>{todo.type}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell className="text-right">{todo.completed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
