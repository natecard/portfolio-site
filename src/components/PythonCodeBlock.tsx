import '@/styles/Prism.css';
import Prism from '@/public/Prism';

export default function PythonCodeBlock() {
	return (
		<div className="block">
			<div className="language-python">
				<code>{`
                    def for_loop():
                        for i in range(10):
                            print(i)
                `}</code>
			</div>
		</div>
	);
}
