import type {Registry} from "./schema"

export const component:Registry = [
    {
        name:'ai-input',
        type:'registry:component',
        dependencies:['lucide-react'],
        registryDependencies:["textarea"],
        files:[
            {
                path:"components/ui_code_components/ai-input/ai-input.tsx",
                type:"registry:component",

            },
            {
                path:"hooks/use-auto-resize-textarea.ts",
                type:"registry:hook"
            }
        ]
    }
]