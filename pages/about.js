// This is the Link API
import Link from 'next/link'

import { Button, Container, Row, Col } from '@farvisionllc/emotion-react-bootstrap';

const About = () => (
	<Container>
		<Row>
			<Col>
				<div>
					<Link href="/index">
						<Button>Home</Button>
					</Link>
					<p>About</p>
				</div>
			</Col>
		</Row>
	</Container>
	)

	export default About