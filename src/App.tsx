// NOTE: THE HOTKEY BEHAVIOR IS NOT WORKING AS EXPECTED PLEASE LOOK AT https://github.com/TanStack/hotkeys/issues/138

import { Button, DropdownMenu } from "@radix-ui/themes";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useState } from "react";

const ARROW_DOWN_HOTKEY = "ArrowDown";
const FOO = "foo";
const BAR = "bar";
const BAZ = "baz";

function App() {
	const [count, setCount] = useState(0);
	const [onFocus, setOnFocus] = useState<string>("No focus");

	useHotkey(ARROW_DOWN_HOTKEY, () => setCount((c) => c + 1));

	return (
		<>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<div className="p-2">
						<Button className="">Dropdown button</Button>
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item id={FOO} onFocus={() => setOnFocus(FOO)}>
						Foo
					</DropdownMenu.Item>
					<DropdownMenu.Item id={BAR} onFocus={() => setOnFocus(BAR)}>
						Bar
					</DropdownMenu.Item>
					<DropdownMenu.Item id={BAZ} onFocus={() => setOnFocus(BAZ)}>
						Baz
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<h1 className="text-2xl font-bold text-center">
				Global Hotkeys Fire Inside Aria Widgets Demo
			</h1>
			<div className="flex flex-col items-center justify-center p-4">
				<h2 className="text-lg font-bold p-2">Steps to Reproduce</h2>
				<ol className="list-decimal list-inside ">
					<li>
						Click on the dropdown button on top right corner of the screen
					</li>
					<li>Use the arrow down key to navigate through the dropdown menu</li>
					<li>
						You should see the current hotkey count increment by 1 while
						displaying the focus item in the dropdown menu.
					</li>
				</ol>
			</div>

			<div className="flex flex-col items-center justify-center p-4">
				<h2> Expected behavior for tanstack hotkeys</h2>
				<p>
					When the browser focus inside a widget, and both the widget and
					tanstack hotkeys are listening for the same keyboard events, the key
					presses should only effect the widget and not Tanstack hotkeys.
				</p>
			</div>

			<h3 className="text-lg font-bold text-center">
				Current State values for the hotkey and the focus element:
			</h3>
			<div className="flex items-center justify-center p-4 gap-8">
				<p>Current Count from the hotkey: {count}</p>
				<p>Selected item: {onFocus}</p>
			</div>
		</>
	);
}

export default App;
