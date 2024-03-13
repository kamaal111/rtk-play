import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { StringLiteral } from "@/types";

type TabContent<Key extends string> = {
  key: StringLiteral<Key>;
  title: string;
  view: React.JSX.Element;
};

function LoginSignUpTab<Key extends string>({
  contents,
  defaultKey,
  onValueChange,
}: {
  contents: TabContent<Key>[];
  defaultKey: StringLiteral<Key>;
  onValueChange: (value: Key) => void;
}) {
  return (
    <Tabs
      defaultValue={defaultKey}
      className="w-[400px]"
      onValueChange={(value) => onValueChange(value as Key)}
    >
      <TabsList>
        {contents.map(({ key, title }) => (
          <TabsTrigger key={key} value={key}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {contents.map(({ key, view }) => (
        <TabsContent key={key} value={key}>
          {view}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default LoginSignUpTab;
