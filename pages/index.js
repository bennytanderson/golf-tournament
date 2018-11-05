// This is the Link API
import Link from 'next/link'

import { Button, Container, Row, Col } from '@farvisionllc/emotion-react-bootstrap';

const Index = () => (
	<Container>
		<Row>
			<Col>
				<div>
					<Link href="/about">
						<Button>About</Button>
					</Link>
					<p>Hafa Adai Golf Tournament</p>
				</div>
			</Col>
		</Row>
	</Container>
	)

	export default Index
