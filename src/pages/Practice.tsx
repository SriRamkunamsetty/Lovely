import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, CheckCircle2, XCircle, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

const PROBLEM = {
  title: "Two Sum",
  difficulty: "Easy",
  description: `
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\`
  `,
  starterCode: `function twoSum(nums, target) {
  // Write your code here
  
}`
};

export function Practice() {
  const [code, setCode] = useState(PROBLEM.starterCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("testcases");

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveTab("output");
    
    // Simulate API call to execution engine
    setTimeout(() => {
      try {
        // Very basic simulation of running the code
        // IN PRODUCTION: This would go to a secure Docker backend
        const result = "Test Case 1: Passed\\nTest Case 2: Passed\\nTest Case 3: Passed\\n\\nAll test cases passed! Runtime: 42ms";
        setOutput(result);
      } catch (err) {
        setOutput(String(err));
      } finally {
        setIsRunning(false);
      }
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col md:flex-row">
      {/* Left Panel: Problem Description */}
      <div className="flex w-full flex-col border-r md:w-1/3 lg:w-2/5">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{PROBLEM.title}</h2>
            <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
              {PROBLEM.difficulty}
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: PROBLEM.description.replace(/\\n/g, '<br/>').replace(/\`\`\`/g, '<pre><code>').replace(/\`\`\`/g, '</code></pre>') }} />
          </div>
        </div>
      </div>

      {/* Right Panel: Editor & Output */}
      <div className="flex w-full flex-col md:w-2/3 lg:w-3/5">
        {/* Editor Header */}
        <div className="flex items-center justify-between border-b p-2 px-4">
          <div className="flex items-center gap-2">
            <select className="rounded-md border bg-background px-3 py-1.5 text-sm">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 text-primary border-primary/20 hover:bg-primary/10">
              <MessageSquare className="h-4 w-4" />
              AI Hint
            </Button>
            <Button size="sm" className="gap-2" onClick={handleRunCode} disabled={isRunning}>
              {isRunning ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Run Code
            </Button>
            <Button size="sm" variant="secondary" className="bg-green-600 text-white hover:bg-green-700">
              Submit
            </Button>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 border-b">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'JetBrains Mono',
              padding: { top: 16 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
            }}
          />
        </div>

        {/* Bottom Panel: Output/Testcases */}
        <div className="h-1/3 min-h-[200px] bg-card">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full flex-col">
            <div className="border-b px-4 py-2">
              <TabsList>
                <TabsTrigger value="testcases">Testcases</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="testcases" className="flex-1 overflow-y-auto p-4 m-0">
              <div className="space-y-4">
                <div className="rounded-md border p-3">
                  <div className="mb-2 text-sm font-medium text-muted-foreground">Case 1</div>
                  <div className="space-y-2 font-mono text-sm">
                    <div><span className="text-muted-foreground">Input:</span> nums = [2,7,11,15], target = 9</div>
                    <div><span className="text-muted-foreground">Expected:</span> [0,1]</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="output" className="flex-1 overflow-y-auto p-4 m-0 font-mono text-sm">
              {isRunning ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Executing code...
                </div>
              ) : output ? (
                <pre className="whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-muted-foreground">Run your code to see the output here.</div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
